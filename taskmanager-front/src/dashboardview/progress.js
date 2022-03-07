 import React from "react"
 import { Table, Badge } from "react-bootstrap"
 
 
 const colors = "a50026 d73027 f46d43 fdae61 fee08b ffffbf d9ef8b a6d96a 66bd63 1a9850006837";
 
function Header() {

	 const columns = [
		['Concept', '#d73027a0' ],
		['Workshop', '#f46d43a0'],
		['Proposal', '#fdae61a0'],
		['Build & UT', '#fee08ba0'],
		['P2P SIT', '#ffffbfa0'],
		['UAT', '#d9ef8ba0'],
		['Deployment', '#a6d96aa0'],
		['Hypercare', '#66bd63a0'],
	];
 
	return (
	<thead>
		<tr>
		{ columns.map((col) => {
			console.log(col);
			return <th style={{width: '10%', backgroundColor: col[1] }}>{col[0]}</th>;
		})}
		</tr>
	</thead>
	);
	
} 

 
 export function ProgressTable() {
	
	return (
		<Table>
		<Header/>
		<tbody>
		<tr>
		<td style={{backgroundColor: '#d73027a0' }}>
			<div style={{backgroundColor: '#ffffff80' }}>Basware</div>
		</td>
		<td style={{backgroundColor: '#f46d43a0', margin: 0, padding: '1px', textAlign: 'center' }}>
			<Badge bg="secondary">I811</Badge>
			<Badge bg="secondary">I812</Badge>
			<Badge bg="secondary">I813</Badge>
			<Badge bg="secondary">I814</Badge>
		</td>
		<td style={{backgroundColor: '#fdae61a0' }}>
			<Badge bg="warning">I817</Badge>
			<Badge bg="warning">I818</Badge>
			<Badge bg="warning">I820</Badge>
			<Badge bg="warning">I821</Badge>
			<Badge bg="warning">I822</Badge>
			<Badge bg="warning">I823</Badge>
			<Badge bg="warning">I824</Badge>
			<Badge bg="warning">I825</Badge>
			<Badge bg="warning">I831</Badge>
		</td>
		<td style={{backgroundColor: '#fee08ba0' }}>
			<Badge bg="warning">I819</Badge>
			<Badge bg="warning">I826</Badge>
			<Badge bg="warning">I827</Badge>
			<Badge bg="warning">I829</Badge>
			<Badge bg="warning">I830</Badge>
		</td>
		<td style={{backgroundColor: '#ffffbfa0' }}></td>
		<td style={{backgroundColor: '#d9ef8ba0' }}></td>
		<td style={{backgroundColor: '#a6d96aa0' }}></td>
		<td style={{backgroundColor: '#66bd63a0' }}>
			<Badge bg="primary">Boomi</Badge>
		</td>

		</tr>
		</tbody>
		</Table>
	);
	
	
}
 
 