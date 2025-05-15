/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import WishlistTable from "../components/WishlistTable";

import getWishlistItem from '../services/getWishlistItem'
const CardWishlistPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	cardWishlistItem: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [wishlistItem, setWishlistItem] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, cardWishlistItem: true}))
				const { data: wishlistItem } = await getWishlistItem()
				setWishlistItem(wishlistItem.data)
			} finally {
				setIsLoading(prev => ({...prev, cardWishlistItem: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Card Wishlist Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Card Wishlist Item"}
	singularName={"Wishlist"}
	items={[wishlistItem]}
	isLoading={isLoading.cardWishlistItem}
>
	<WishlistTable
		wishlistItem={wishlistItem}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CardWishlistPage

