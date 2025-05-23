/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import * as Layouts from '@/commons/layouts';
import { HeaderContext } from "@/commons/components"
import ModifiedFormCreateArticle from '../components/ModifiedFormCreateArticle'
const CreateArticlePage = props => {
const [isLoading, setIsLoading] = useState({
	createArticle: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("Create Article Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Content"}
		
	>
		<ModifiedFormCreateArticle
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CreateArticlePage

