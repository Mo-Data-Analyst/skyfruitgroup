import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { FAQ, CHAT_LINKS, CHAT_TEXT } from '../../data/faq';
import Icon from '../ui/Icon';
import { findAnswer } from './matchQuestion';
import logoMark from '../../assets/images/brand/logo-mark.webp';
import './Chatbot.css';

export default function Chatbot() {
  const { pick, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [input, setInput] = useState('');
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const launchRef = useRef(null);
  const text = (key) => pick(CHAT_TEXT[key]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages]);

  const openChat = () => {
    setOpen(true);
    setMessages((m) => (m.length ? m : [{ who: 'bot', text: CHAT_TEXT.hello[lang] }]));
    setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 0);
  };
  const closeChat = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) setTimeout(() => launchRef.current?.focus(), 0);
  };

  const reply = (item) => {
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        item
          ? { who: 'bot', text: item.answer[lang], links: item.links }
          : { who: 'bot', text: CHAT_TEXT.fallback[lang], links: ['quote'] },
      ]);
    }, 300);
  };

  const askFeatured = (item) => {
    setMessages((m) => [...m, { who: 'user', text: item.question[lang] }]);
    reply(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;
    setMessages((m) => [...m, { who: 'user', text: question }]);
    setInput('');
    reply(findAnswer(question));
  };

  const chips = FAQ.filter((item) => showAll || item.featured);

  return (
    <>
      {!open && (
        <button
          className="cb-launch"
          type="button"
          ref={launchRef}
          aria-expanded="false"
          aria-controls="chat-panel"
          onClick={openChat}
        >
          <Icon name="chat" />
          <span>{text('launch')}</span>
        </button>
      )}

      {open && (
        <section
          className="cb-panel"
          id="chat-panel"
          role="dialog"
          aria-labelledby="chat-title"
          onKeyDown={(e) => e.key === 'Escape' && closeChat()}
        >
          <div className="cb-head">
            <img src={logoMark} alt="" width="34" height="39" />
            <div>
              <strong id="chat-title">{text('title')}</strong>
              <span>{text('sub')}</span>
            </div>
            <button className="cb-x" type="button" onClick={() => closeChat()} aria-label={text('close')}>
              <Icon name="close" />
            </button>
          </div>

          <div className="cb-log" ref={logRef} aria-live="polite">
            {messages.map((message, index) => (
              <div className={`cb-msg ${message.who}`} key={index}>
                <div>{message.text}</div>
                {message.links?.length > 0 && (
                  <div className="cb-acts">
                    {message.links.map((key) => (
                      <a className="cb-act" key={key} href={CHAT_LINKS[key].href} onClick={() => closeChat(false)}>
                        {pick(CHAT_LINKS[key].label)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="cb-chips">
            {chips.map((item) => (
              <button className="cb-chip" type="button" key={item.id} onClick={() => askFeatured(item)}>
                {pick(item.question)}
              </button>
            ))}
            <button
              className="cb-chip more"
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll((v) => !v)}
            >
              {text(showAll ? 'less' : 'more')}
            </button>
          </div>

          <form className="cb-form" autoComplete="off" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chat-input">
              {text('inLbl')}
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              maxLength={200}
              placeholder={text('ph')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="cb-send" type="submit" aria-label={text('send')}>
              <Icon name="send" />
            </button>
          </form>
        </section>
      )}
    </>
  );
}
