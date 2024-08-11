import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import { RevealWrapper } from 'next-reveal';
import { useState } from "react";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #f8d7da;
  color: #721c24;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${props => props.show ? 'block' : 'none'};
`;

export default function ProductsGrid({ products, wishedProducts = [] }) {
  const [notification, setNotification] = useState({ show: false, message: '' });

  function showNotification(message) {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 3000);
  }

  return (
    <>
      <Notification show={notification.show}>
        {notification.message}
      </Notification>
      <StyledProductsGrid interval={100}>
        {products?.length > 0 && products.map((product, index) => (
          <RevealWrapper key={product._id} delay={index * 50}>
            <ProductBox
              {...product}
              wished={wishedProducts.includes(product._id)}
              showNotification={showNotification}
            />
          </RevealWrapper>
        ))}
      </StyledProductsGrid>
    </>
  );
}
