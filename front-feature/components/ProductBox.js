// import styled from "styled-components";
// import Button from "@/components/Button";
// import CartIcon from "@/components/icons/CartIcon";
// import Link from "next/link";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "@/components/CartContext";
// import { primary } from "@/lib/colors";
// import FlyingButton from "@/components/FlyingButton";
// import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
// import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
// import axios from "axios";
// import { useSession } from "next-auth/react";

// const ProductWrapper = styled.div`
//   button {
//     width: 100%;
//     text-align: center;
//     justify-content: center;
//   }
// `;

// const WhiteBox = styled(Link)`
//   background-color: #fff;
//   padding: 20px;
//   height: 120px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   position: relative;
//   img {
//     max-width: 100%;
//     max-height: 80px;
//   }
// `;

// const Title = styled(Link)`
//   font-weight: normal;
//   font-size: 0.9rem;
//   color: inherit;
//   text-decoration: none;
//   margin: 0;
// `;

// const ProductInfoBox = styled.div`
//   margin-top: 5px;
// `;

// const PriceRow = styled.div`
//   display: block;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     gap: 5px;
//   }
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 2px;
// `;

// const Price = styled.div`
//   font-size: 1rem;
//   font-weight: 400;
//   text-align: right;
//   @media screen and (min-width: 768px) {
//     font-size: 1.2rem;
//     font-weight: 600;
//     text-align: left;
//   }
// `;

// const WishlistButton = styled.button`
//   border: 0;
//   width: 40px !important;
//   height: 40px;
//   padding: 10px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   background: transparent;
//   cursor: pointer;
//   ${props => props.wished ? `
//     color: red;
//   ` : `
//     color: black;
//   `}
//   svg {
//     width: 16px;
//   }
//   ${props => !props.isAuthenticated && `
//     cursor: not-allowed;
//     opacity: 0.5;
//   `}
// `;

// const UnavailableButton = styled(Button)`
//   background-color: #ccc;
//   cursor: not-allowed;
//   &:hover {
//     background-color: #ccc;
//   }
// `;

// export default function ProductBox({
//   _id, title, quantity, description, price, images, wished = false,
//   onRemoveFromWishlist = () => { },
// }) {
//   const { data: session } = useSession();
//   const isAuthenticated = !!session;

//   const url = '/product/' + _id;
//   const [isWished, setIsWished] = useState(wished);

//   function addToWishlist(ev) {
//     if (!isAuthenticated) {
//       alert("Please log in to add items to your wishlist.");
//       return;
//     }
//     ev.preventDefault();
//     ev.stopPropagation();
//     const nextValue = !isWished;
//     if (nextValue === false && onRemoveFromWishlist) {
//       onRemoveFromWishlist(_id);
//     }
//     axios.post('/api/wishlist', {
//       product: _id,
//     }).then(() => { });
//     setIsWished(nextValue);
//   }

//   return (
//     <ProductWrapper>
//       <WhiteBox href={url}>
//         <div>
//           <WishlistButton wished={isWished} onClick={addToWishlist} isAuthenticated={isAuthenticated}>
//             {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
//           </WishlistButton>
//           <img src={images?.[0]} alt="" />
//         </div>
//       </WhiteBox>
//       <ProductInfoBox>
//         <Title href={url}>{title}</Title>
//         <PriceRow>
//           <Price>
//             Left: {quantity}
//           </Price>
//           {quantity > 0 ? (
//             <FlyingButton _id={_id} src={images?.[0]}>Borrow</FlyingButton>
//           ) : (
//             <UnavailableButton block>
//               Unavailable
//             </UnavailableButton>
//           )}
//         </PriceRow>
//       </ProductInfoBox>
//     </ProductWrapper>
//   );
// }

import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
import axios from "axios";

const ProductWrapper = styled.div`
  button {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

const WishlistButton = styled.button`
  border: 0;
  width: 40px !important;
  height: 40px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  ${props => props.wished ? `
    color: red;
  ` : `
    color: black;
  `}
  svg {
    width: 16px;
  }
  ${props => !props.isAuthenticated && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const UnavailableButton = styled(Button)`
  background-color: #ccc;
  cursor: not-allowed;
  &:hover {
    background-color: #ccc;
  }
`;

export default function ProductBox({
  _id, title, quantity, description, price, images, wished = false,
  onRemoveFromWishlist = () => { },
  showNotification
}) {
  const { data: session } = useSession();
  const isAuthenticated = !!session;

  const url = '/product/' + _id;
  const [isWished, setIsWished] = useState(wished);

  function addToWishlist(ev) {
    if (!isAuthenticated) {
      ev.preventDefault();
      ev.stopPropagation();
      showNotification("Please log in to add books to your wishlist.");
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !isWished;
    if (nextValue === false && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id);
    }
    axios.post('/api/wishlist', {
      product: _id,
    }).then(() => { });
    setIsWished(nextValue);
  }

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <WishlistButton wished={isWished} onClick={addToWishlist} isAuthenticated={isAuthenticated}>
            {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
          </WishlistButton>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            Left: {quantity}
          </Price>
          {quantity > 0 ? (
            <FlyingButton
              _id={_id}
              src={images?.[0]}
              showNotification={showNotification}
            >
              Borrow
            </FlyingButton>
          ) : (
            <UnavailableButton block>
              Unavailable
            </UnavailableButton>
          )}
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
