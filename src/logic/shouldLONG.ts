// Constants:
import { RSX_CONSTANTS } from '../constants/RSX'


// Functions:
const shouldLONG = ({ RSX, isCurrently }: { RSX: number[], isCurrently: { LONG?: boolean, SHORT?: boolean } }) => {
  if (isCurrently.LONG) return false
  if (RSX[ RSX.length - 2 ] > RSX_CONSTANTS.OSL) return false
  if (Math.min(RSX[ RSX.length - 1 ], RSX[ RSX.length - 2 ], RSX[ RSX.length - 3 ]) === RSX[ RSX.length - 2 ]) return true
  else return false
}


// Exports:
export default shouldLONG
