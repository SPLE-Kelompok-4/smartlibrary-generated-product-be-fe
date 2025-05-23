/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/

/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
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
// import Table from "../components/invalidTable";

// import getListCommunityContent from '../services/getListCommunityContent'
const CommunityContentPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	communityContent: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listCommunityContent, setListCommunityContent] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				// setIsLoading(prev => ({...prev, communityContent: true}))
				// const { data: listCommunityContent } = await getListCommunityContent()
				// setListCommunityContent(listCommunityContent.data)
			} finally {
				// setIsLoading(prev => ({...prev, communityContent: false}))
			}
		}
		fetchData()
	}, [])

	
	useEffect(() => {
		setTitle("Article Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
				<Link to={`/article/create
				`}>
					<Button className="p-2" variant="primary">
					  Create Article
					</Button>
				</Link>
				
				
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Article"}
	singularName={""}
	items={[listCommunityContent]}
	isLoading={isLoading.communityContent}
>
	<invalidTable
		listCommunityContent={listCommunityContent}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CommunityContentPage

