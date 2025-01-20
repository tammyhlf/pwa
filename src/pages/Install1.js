import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

export default function Install() {
  const [beforeInstallEvent, setBeforeInstallEvent] = useState(null);
  const installingViaButtonRef = useRef(false);

  const onBeforeInstallPromptEvent = (event) => {
    console.log('beforeinstallprompt event triggered');
    event.preventDefault();
    setBeforeInstallEvent(event);
  };

  const onAppInstalled = () => {
    setBeforeInstallEvent(null);
    if (document.hidden) return;
    installingViaButtonRef.current = false;
    setTimeout(() => {
      toast.success('安装已完成，请返回手机屏幕查看应用。', {
        hideProgressBar: true,
        autoClose: 2000,
        position: "bottom-center",
      });
    }, 1500);
  };

  const onInstallClick = async (event) => {
    if (!beforeInstallEvent) return;
    installingViaButtonRef.current = true;

    beforeInstallEvent.prompt();
    const { outcome } = await beforeInstallEvent.userChoice;
    if (outcome === 'dismissed') {
      installingViaButtonRef.current = false;
    }
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', onBeforeInstallPromptEvent);
    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPromptEvent);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  return (
    <div>
      {beforeInstallEvent && (
        <button className="install-btn" onClick={onInstallClick}>
          Install
        </button>
      )}
      <ToastContainer />
    </div>
  );
}
