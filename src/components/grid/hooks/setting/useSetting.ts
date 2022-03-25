import { useState, useEffect, useCallback } from "react";
import { useShowControl } from "../../../../hooks/useShowControl";
import { useCustomContext } from "../../store";

export const useSetting = () => {
  const { state, dispatch } = useCustomContext();
  const [proxyColumn, setProxyColumn] = useState(state.column);
  const { ref, isShow, setShow } = useShowControl();

  useEffect(() => {
    setProxyColumn(state.column);
  }, [state.column]);

  const setVisibleId = useCallback(
    (id: number) => {
      setProxyColumn(
        proxyColumn.map((columnItem) =>
          columnItem.id === id
            ? { ...columnItem, visible: columnItem.visible === 1 ? 0 : 1 }
            : columnItem,
        ),
      );
    },
    [proxyColumn],
  );

  const submit = useCallback(() => {
    dispatch({ type: "SET_COLUMN", column: proxyColumn });
    state.columnMutation(proxyColumn);
    setShow(false);
  }, [dispatch, proxyColumn, setShow, state]);

  const cancel = useCallback(() => {
    setProxyColumn(state.column);
    setShow(false);
  }, [setShow, state.column]);

  const checkAll = useCallback(() => {
    setProxyColumn(proxyColumn.map((item) => ({ ...item, visible: 1 })));
  }, [proxyColumn]);

  const clearAll = useCallback(() => {
    setProxyColumn(proxyColumn.map((item) => ({ ...item, visible: 0 })));
  }, [proxyColumn]);

  return {
    ref,
    isShow,
    setShow,
    proxyColumn,
    setVisibleId,
    submit,
    cancel,
    checkAll,
    clearAll,
  };
};
