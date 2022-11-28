import { useContext } from 'react';
import { UiContext } from '../UiProvider';

export const useUi = () => useContext(UiContext);
