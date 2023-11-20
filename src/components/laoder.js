import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        justifyContent="center"
      />
    </LoaderContainer>
  );
};
