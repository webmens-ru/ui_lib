import { useCallback } from 'react';
import { Action } from '../store';
import { Item } from '../types';

interface UseSetTabProps {
  dispatch: (act: Action) => void
  sliderOpenner?: (params: any) => void
}

export const useSetTab = ({ dispatch, sliderOpenner }: UseSetTabProps) => {
  const setTab = useCallback((item: Item) => {
    switch (item.type) {
      case 'updatePage':
        dispatch({ type: 'set_current_item', item });
        break;
      case 'openPath':
        if (!sliderOpenner && !BX24) {
          window.open(item.params.url, '_blank')?.focus();
        }

        if (sliderOpenner) {
          sliderOpenner(item.params.url)
        } else if (BX24) {
          BX24.openPath(item.params.url);
        }
        break;
      case 'openLink':
        window.open(item.params.url, '_blank')?.focus();
        break;
      case 'openApplication':
        if (!sliderOpenner && !BX24) {
          let url = '';
          for (const [key, value] of Object.entries(item.params)) {
            url += `${key}=${value}&`;
          }

          window.open(url, '_blank')?.focus();
        }
        if (sliderOpenner) {
          sliderOpenner(item.params)
        } else if (BX24) {
          BX24.openApplication(item.params);
        }
        break;
      default:
        break;
    }
    if (item.type === 'openLink') {
      window.open(item.params.url);
    }
  }, [dispatch, sliderOpenner]);

  return { setTab };
};
