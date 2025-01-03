import { useEffect, useRef } from 'react'

export default function Install() {
  const promptRef = useRef(null)
  const installRef = useRef(null)

  const onInstall = () => {
    const prompt = promptRef.current
    if (prompt) {
      prompt.prompt()
      prompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
        } else {
          console.log('User dismissed the A2HS prompt')
        }
        promptRef.current = null
        const installButton = document.getElementById('install-button')
        if (installButton) {
          installButton.style.display = 'none'
        }
      })
    }
  }

  useEffect(() => {
    const onBeforeInstallPrompt = (e) => {
      e.preventDefault()
      promptRef.current = e
      console.log('beforeinstallprompt event was fired')
      const installButton = document.getElementById('install-button')
      if (installButton) {
        installButton.style.display = 'block'
      }
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    }
  }, [])

  return (
    <div>
      <div id="install-button" ref={installRef} onClick={onInstall}>
        安装
      </div>
    </div>
  )
}
