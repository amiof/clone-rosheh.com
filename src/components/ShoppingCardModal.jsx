import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./style/shoppingCardModal.module.css"
import { toggleModal } from '../redux/ShowModal/shoppingCardSlice'
import { AiOutlineClose } from 'react-icons/ai'
import TinyProduct from './TinyProduct'
const ShoppingCardModal = () => {
  const { productsList } = useSelector((state) => state.counterProducts)
  const dispatch = useDispatch()
  const { showModalStatus } = useSelector((state) => state.modal);
  console.log("products", productsList)
  return (
    <div className={`${showModalStatus ? styles.containerOpen : styles.container}`}>
      <div className={` ${showModalStatus ? styles.open : styles.close} `}>
        <div className={styles.menu}>
          <div>
            سبد خرید
          </div>
          <AiOutlineClose size={"30px"} onClick={() => dispatch(toggleModal())}></AiOutlineClose>
        </div>
          {productsList?.map((product) => <TinyProduct key={product.id} {...product}/>)}
      </div>
    </div>
  )
}

export default ShoppingCardModal
