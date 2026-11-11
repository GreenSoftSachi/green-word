export function egui_text_agent_session() { 
  return { active: false }; 
}

export function egui_text_agent_activate(session, active) { 
  session.active = active;
  const A = window.GreenWordAndroid || window.GreenOfficeAndroid;
  if (active) {
    try {
      const inp = document.querySelector('input[type="text"]') || document.querySelector('.text-agent') || document.querySelector('input');
      if (inp) {
        inp.style.pointerEvents = 'auto';
        inp.focus({ preventScroll: true });
      }
    } catch (e) {}
    if (A && A.showKeyboard) {
      A.showKeyboard();
    }
  } else {
    if (A && A.hideKeyboard) {
      A.hideKeyboard();
    }
  }
}

export function egui_text_agent_listener(session, callback) { 
  return event => { 
    if (session.active) callback(event); 
  }; 
}
