import { useState } from "react";

interface CardProps {
  title: string;
  imgSrc: string;
  text: string;
  color: string;
  type: string;
  category: string[];
}

const useNewsModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardProps, setCardProps] = useState<CardProps | null>(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (props: CardProps) => {
    console.log(props);
    setCardProps(props);
    setShowModal(true);
  };

  return { showModal, handleClose, handleShow, cardProps };
};

export default useNewsModal;
