(() => {
  'use strict';

  const cleanQuestion = text => String(text || '').replace(/^\s*(scenario\s*)?\d+\s*[:.)-]\s*/i, '').trim();

  function clarificationFor(questionText) {
    const question = cleanQuestion(questionText);
    const withoutStop = question.replace(/[?.!]+$/, '');
    const lowerFirst = text => text.charAt(0).toLowerCase() + text.slice(1);
    if (/\bcalculate\b/i.test(question)) return `For “${withoutStop}”, show the working and units, then explain what the result means.`;
    if (/\b(difference|compare|similar|different)\b/i.test(question)) return `Compare the things named in “${withoutStop}”. Say what is similar or different and why it matters.`;
    if (/^why\s+/i.test(question)) return `Explain why ${lowerFirst(withoutStop.replace(/^why\s+/i, ''))}. Give the main reason and why it matters.`;
    if (/^how\s+/i.test(question)) return `Explain how ${lowerFirst(withoutStop.replace(/^how\s+/i, ''))}. Describe the steps or cause and link them to the result.`;
    if (/^what\s+/i.test(question)) return `Identify ${lowerFirst(withoutStop.replace(/^what\s+/i, ''))}. Then explain its job or effect.`;
    if (/^which\s+/i.test(question)) return `Choose ${lowerFirst(withoutStop.replace(/^which\s+/i, ''))}. Explain the reason for your choice.`;
    return `For “${withoutStop}”, answer each part and explain your reason using the task details.`;
  }

  const style = document.createElement('style');
  style.textContent = `
    .clarification-toggle { min-height:44px; margin:.2rem 0 .65rem; padding:.5rem .8rem; border:1px solid #7aa9a4; border-radius:7px; background:#f2faf8; color:#115e59; font:inherit; font-weight:700; cursor:pointer; }
    .clarification-toggle:focus-visible { outline:3px solid #0f766e; outline-offset:3px; }
    .clarification-panel { max-width:68ch; margin:0 0 .8rem; padding:.7rem .85rem; border-left:4px solid #0f766e; border-radius:0 7px 7px 0; background:#f2faf8; overflow-wrap:anywhere; }
    @media print { .clarification-toggle { display:none !important; } }
  `;
  document.head.appendChild(style);

  document.querySelectorAll('textarea.response').forEach((textarea, index) => {
    const card = textarea.closest('.qa-card') || textarea.parentElement;
    if (!card) return;
    const question = card.querySelector('.qa-question');
    if (!question) return;

    const id = `response-clarification-${index + 1}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'clarification-toggle';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', id);
    button.textContent = 'What is this asking?';

    const panel = document.createElement('div');
    panel.className = 'clarification-panel';
    panel.id = id;
    panel.hidden = true;
    const lead = document.createElement('strong');
    lead.textContent = 'In simpler words: ';
    panel.append(lead, document.createTextNode(clarificationFor(question.textContent)));
    textarea.insertAdjacentElement('beforebegin', panel);
    panel.insertAdjacentElement('beforebegin', button);

    button.addEventListener('click', () => {
      const isOpening = panel.hidden;
      panel.hidden = !isOpening;
      button.setAttribute('aria-expanded', String(isOpening));
      button.textContent = isOpening ? 'Hide simpler wording' : 'What is this asking?';
    });

    textarea.placeholder = 'Write your response before viewing the appropriate response example.';
    const exampleButton = card.querySelector('.reveal-btn');
    const answer = exampleButton ? document.getElementById(exampleButton.dataset.target) : null;
    if (!exampleButton || !answer) return;
    exampleButton.textContent = 'Appropriate response example';
    exampleButton.setAttribute('aria-controls', answer.id);
    exampleButton.setAttribute('aria-expanded', String(answer.style.display === 'block'));
    exampleButton.addEventListener('click', () => queueMicrotask(() => {
      const isOpen = answer.style.display === 'block';
      exampleButton.setAttribute('aria-expanded', String(isOpen));
      exampleButton.textContent = isOpen ? 'Hide appropriate response example' : 'Appropriate response example';
    }));
  });

  document.querySelectorAll('.reveal-btn').forEach(button => {
    if (button.textContent.trim() !== 'Appropriate response example') return;
    const answer = document.getElementById(button.dataset.target);
    if (!answer) return;
    button.setAttribute('aria-controls', answer.id);
    button.setAttribute('aria-expanded', String(answer.style.display === 'block'));
    button.addEventListener('click', () => queueMicrotask(() => {
      const isOpen = answer.style.display === 'block';
      button.setAttribute('aria-expanded', String(isOpen));
      button.textContent = isOpen ? 'Hide appropriate response example' : 'Appropriate response example';
    }));
  });
})();
