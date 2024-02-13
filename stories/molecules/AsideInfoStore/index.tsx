import React from 'react'
import { IconClose } from '../../../assets/icons'
import { getGlobalStyle } from '../../../utils'
import styles from './AsideInfoStore.module.css'

interface AsideInfoStoreProps {
  children: React.ReactNode;
  handleClose: () => void;
  show: boolean;
}
export const AsideInfoStore: React.FC<AsideInfoStoreProps> = ({ 
  show = false, 
  children, 
  handleClose = () => { return } 
}) => {
  return (
    <div
      className={`${styles.aside_content} ${
        show ? styles.aside_content__show : ''
      }`}
    >
      <div className={styles.aside_content__close}>
        <button
          className={styles.aside_content__close_button}
          onClick={handleClose}
          type='button'
        >
          <IconClose color={getGlobalStyle('--color-icons-primary')} size={30}/>
        </button>
      </div>
      {children}
    </div>
  )
}
