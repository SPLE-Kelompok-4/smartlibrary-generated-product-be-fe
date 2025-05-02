/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
import ReviewTable from "../components/ReviewTable";

import getReviewItem from '../services/getReviewItem'
const CardReviewPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	cardReviewItem: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [reviewItem, setReviewItem] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, cardReviewItem: true}))
				const { data: reviewItem } = await getReviewItem()
				setReviewItem(reviewItem.data)
			} finally {
				setIsLoading(prev => ({...prev, cardReviewItem: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Card Review Page")
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
	title={"Card Review Item"}
	singularName={"Review"}
	items={[reviewItem]}
	isLoading={isLoading.cardReviewItem}
>
	<ReviewTable
		reviewItem={reviewItem}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CardReviewPage

