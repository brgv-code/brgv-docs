import { useTypedSelector } from "../hooks/use-type-selector";
import CellListItem from "./cell-list-item";
function CellList() {

    const cells = useTypedSelector(({ cells }) => cells?.order?.map((id: string) =>  cells.data?.[id]));
    // this is just to make sure that the state is being used in the component  
//    const renderedCells = cells.map(cell => <CellListItem key={cell.id} cell={cell} />)
// map over the cells array and return a CellListItem component for each cell
    const renderedCells = cells?.map((cell:any) => (<CellListItem key={cell.id} cell={cell} />
    ));

   return (
        <div>{renderedCells}</div>
    )
}

export default CellList;