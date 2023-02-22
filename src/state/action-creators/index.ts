import { ActionType } from "../action-types";
import {
  Action,
  BundleCompleteAction,
  BundleStartAction,
  DeleteCellAction,
  InsertCellAfterAction,
  MoveCellAction,
  UpdateCellAction,
  Direction,
} from "../actions";
import { Cell, CellType } from "../cell";

export const moveCell = (
  id: string,
  direction: Direction
): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const insertCellAfter = (
  id: string | null,
  type: CellType
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type,
    },
  };
};

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const bundleStart = (cellId: string): BundleStartAction => {
  return {
    type: ActionType.BUNDLE_START,
    payload: {
      cellId,
    },
  };
};

export const bundleComplete = (
  cellId: string,
  bundle: {
    code: string;
    err: string;
  }
): BundleCompleteAction => {
  return {
    type: ActionType.BUNDLE_COMPLETE,
    payload: {
      cellId,
      bundle,
    },
  };
};
