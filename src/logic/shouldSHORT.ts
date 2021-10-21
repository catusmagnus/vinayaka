// Constants:
import { RSX_CONSTANTS } from '../constants/RSX'


// Functions:
const shouldSHORT = ({ RSX, isCurrently }: { RSX: number[], isCurrently: { LONG?: boolean, SHORT?: boolean } }) => {
  if (isCurrently.SHORT) return false
  if (RSX[ RSX.length - 1 ] < RSX_CONSTANTS.OBL) return false
  if (Math.max(RSX[ RSX.length - 1 ], RSX[ RSX.length - 2 ], RSX[ RSX.length - 3 ]) === RSX[ RSX.length - 2 ]) return true
  else return false
}


// Exports:
export default shouldSHORT
