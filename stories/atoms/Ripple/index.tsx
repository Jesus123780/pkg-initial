import PropTypes from 'prop-types';
import React, { useRef, ReactNode, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { IconLoading } from '../../../assets';
import { getGlobalStyle } from '../../../utils';
import { BGColor, PColor } from '../../../assets/colors';
import styles from './RippleButton.module.css';

export interface RippleButtonProps {
  label?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading?: boolean;
  style?: CSSProperties;
  family?: string;
  border?: string;
  height?: string;
  disabled?: boolean;
  standard?: boolean;
  active?: any;
  type?: 'button' | 'submit' | 'reset';
  widthButton?: string;
  bgColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  radius?: string;
  children?: ReactNode;
}

export const RippleButton: React.FC<RippleButtonProps> = (props) => {
  const {
    label = '',
    onClick = () => {},
    loading = false,
    style = {},
    family = 'PFont-Light',
    disabled = false,
    standard = false,
    active,
    type = 'button',
    widthButton = '100%',
    bgColor,
    color,
    margin,
    padding,
    radius,
  } = props || {};
  const button = useRef<HTMLButtonElement>(null);

  const handleRippleEffect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const buttonElement = button.current;
    if (!buttonElement) return;

    const ripple = document.createElement('span');
    const rect = buttonElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const left = e.pageX - rect.left - size / 2 - window.pageXOffset;
    const top = e.pageY - rect.top - size / 2 - window.pageYOffset;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    ripple.classList.add(styles.ripple);

    const currentRipple = buttonElement.querySelector(`.${styles.ripple}`);
    if (currentRipple) {
      currentRipple.remove();
    }

    buttonElement.appendChild(ripple);

    ripple.addEventListener('animationend', function() {
      ripple.remove();
    });

    if (onClick) {
      onClick(e);
    }
  };

  if (!button) return <></>;

  return (
    <Button
      active={active}
      bgColor={bgColor}
      className={`ripple-button`}
      color={color}
      disabled={disabled}
      family={family}
      margin={margin}
      onClick={handleRippleEffect}
      padding={padding}
      radius={radius}
      ref={button}
      standard={standard}
      style={style}
      type={type}
      widthButton={widthButton}
      {...props}
    >
      <span id='ripple-button-label'>{label}</span>
      {loading && (
        <LoadingWrapper>
          <IconLoading color={getGlobalStyle('--color-base-white')} size={20} />
        </LoadingWrapper>
      )}
      <span style={loading ? { opacity: 0 } : {}}>{props.children}</span>
    </Button>
  );
};

RippleButton.propTypes = {
  active: PropTypes.any,
  bgColor: PropTypes.any,
  children: PropTypes.any,
  color: PropTypes.any,
  family: PropTypes.any,
  label: PropTypes.any,
  loading: PropTypes.bool,
  margin: PropTypes.any,
  onClick: PropTypes.func,
  padding: PropTypes.any,
  radius: PropTypes.any,
  standard: PropTypes.any,
  style: PropTypes.any,
  type: PropTypes.any,
  widthButton: PropTypes.any
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: -5px;
  padding: 1em;
  bottom: 0;
  position: absolute;

  svg {
    animation: rotator 1.4s linear infinite;
    fill: #fff;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button<RippleButtonProps>`
  &:disabled {
    background-color: ${`${PColor}69`} !important;
  }

  padding: ${({ padding }) => padding || '1em'};
  background-color: ${({ bgColor }) => bgColor || 'red'};
  color: ${({ color }) => color || BGColor};
  font-family: ${({ family }) => family || 'PFont-Light'};
  width: ${({ widthButton }) => widthButton || '100%'};
  ${({ margin }) => margin && css`margin: ${margin};`}
  ${({ border }) => border && css`border: ${border};`}
  ${({ radius }) => radius && css`border-radius: ${radius};`}
  ${({ height }) => height && css`height: ${height};`}
`;

