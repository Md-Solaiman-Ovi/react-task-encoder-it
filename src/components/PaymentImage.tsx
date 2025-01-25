interface PaymentImageProps {
  cssClass?: string;
  imageSource?: string;
  width?: number;
}

const PaymentImage = ({ imageSource, cssClass, width }: PaymentImageProps) => {
  return (
    <div>
      <img src={`${imageSource}`} width={width} height={5} alt="" />
    </div>
  );
};

export default PaymentImage;
