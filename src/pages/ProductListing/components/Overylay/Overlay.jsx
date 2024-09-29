import style from './Overlay.module.css';

export default function Overlay({ isOpen, onClose, children }) {
  return (
    <>
        {isOpen ? (
            <div className={style.overlay}>
                <div className={style.overlayBackground}>
                    <div className={style.overlayContainer}>
                        <div className={style.overlayControls}>
                            <button className={style.overlayClose} onClick={onClose}>
                                Close
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        ) : null}
    </>
  )
}