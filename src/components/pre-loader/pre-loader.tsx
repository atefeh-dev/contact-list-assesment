import { ReactComponent as SmileIcon } from "../../assets/images/smile.svg"

import "./pre-loader.scss";

const PreLoader = () => {
  return (
    <div className='body' data-testid='preloader'>
      <SmileIcon />
    </div>
  );
};

export default PreLoader;
