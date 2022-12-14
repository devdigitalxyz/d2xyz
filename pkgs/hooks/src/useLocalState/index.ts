import { type Dispatch, type SetStateAction, useState, useEffect } from "react";

export const useLocalState = <T>(
  initialValue: T,
  lsid: string // local storage id
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, stateSet] = useState<T>(initialValue);

  // load local storage on mount
  useEffect(() => {
    try {
      const loaded = localStorage?.getItem(lsid);
      if (loaded) {
        const parsed = JSON.parse(loaded);
        stateSet(parsed);
      }
    } catch (e) {
      console.error(e);
    }
  }, [lsid]);

  // sync
  useEffect(() => {
    try {
      localStorage?.setItem(lsid, JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  }, [state, lsid]);

  return [state, stateSet];
};
