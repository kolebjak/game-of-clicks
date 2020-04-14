import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  & td:last-of-type,
  & th:last-of-type {
    text-align: right;
  }

  & thead th {
    text-transform: uppercase;
    color: #999999;
    font-size: 10px;
    padding: 5px 5px;
  }

  & tbody td {
    padding: 5px 5px;
  }
`;

export const Row = styled.tr<{ selected: boolean }>`
  ${(props) =>
    props.selected &&
    `
    background: #3878de;
    color: #fff;
    font-size: 140%;
  `}

  ${(props) =>
    !props.selected &&
    `
    &:nth-child(even) {
      background: #d2e3f8;
    }
  
    &:nth-child(odd) {
      background: #e7f0fc;
    }
  `}
`;
