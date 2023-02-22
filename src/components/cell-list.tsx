import { useTypedSelector } from "../hooks/use-type-selector";
import CellListItem from "./cell-list-item";
import  AddCell  from "./add-cell";
import { Fragment } from "react";
function CellList() {

    const cells = useTypedSelector(({ cells }) => cells?.order?.map((id: string) =>  cells.data?.[id]));
    // this is just to make sure that the state is being used in the component  
// map over the cells array and return a CellListItem component for each cell
    const renderedCells = cells?.map((cell:any) => (
    <Fragment key={cell.id}>
            <CellListItem key={cell.id} cell={cell} />
        <AddCell  prevCellId={cell.id} />
    </Fragment>
    ));
   return (
    
        <div>
              <AddCell forceVisible={cells?.length === 0}  prevCellId={null} />
              {renderedCells}
              
</div>
    )
}

export default CellList;