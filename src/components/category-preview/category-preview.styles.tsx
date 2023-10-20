import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  span {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }
`;

export const CategoryPreviewView = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
