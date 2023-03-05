
const CheckoutItem = (props) => {

  const deleteHandler = () =>
  {
    props.onDelete(props.id);
  }

  return (
    <div className="flex gap-x-6 flex-row items-center" onClick={deleteHandler}>
      <img src={props.itempic} alt=":(" height="100px" width="100px" />
      <div className="space-y-2">
          <p className="text-xl font-semibold text-veryDarkBlue">
            {props.name}
          </p>
        <p className="text-veryDarkBlue font-medium text-base">
          Price: {props.price}ден
        </p>
        <p className="text-veryDarkBlue font-medium text-base">Size: {props.size}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
