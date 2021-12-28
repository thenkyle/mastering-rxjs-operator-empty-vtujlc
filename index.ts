import { EMPTY } from 'rxjs';

EMPTY.subscribe({
  next: data => console.log(`empty 範例: ${data}`),
  complete: () => console.log('empty 結束')
});
// empty 結束

