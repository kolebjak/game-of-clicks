import styled from 'styled-components';

export enum ButtonSize {
  small = 'small',
  large = 'large',
}

const Button = styled.button<{ size: ButtonSize }>`
  color: #fff;
  background: #3878de;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;

  ${(p) => p.size === ButtonSize.small && `
    font-size: 15px;
    margin: 10px;
    width: 150px;
    padding: 10px 30px;
  `}

  ${(p) =>
    p.size === ButtonSize.large &&
    `
    font-size: 22px;
    margin: 10px;
    width: calc(100% - 20px);
    padding: 15px 50px;
  `}
`;
export default Button;
