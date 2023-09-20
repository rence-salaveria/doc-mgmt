import { expect, it, describe } from 'vitest';
import { Status } from '$lib/types/enums'

function getBorderClassColor(type: string, status: Status) {
  switch (status) {
    case Status.ON_PROCESS:
      return `${type}-blue-600`;
    case Status.FOR_SIGNING:
      return `${type}-amber-600`;
    case Status.FOR_RELEASE:
      return `${type}-cyan-600`;
    case Status.CLAIMED:
      return `${type}-green-600`;	
    case Status.CANCELLED:
      return `${type}-red-600`;
    default:
      return `${type}-gray-600`;
  }
}

describe('border util function test', () => { 
  it('get correct output of class name for border', () => {
    expect(getBorderClassColor('border', Status.ON_PROCESS)).toBe('border-blue-600');
    expect(getBorderClassColor('border', Status.FOR_SIGNING)).toBe('border-amber-600');
    expect(getBorderClassColor('border', Status.FOR_RELEASE)).toBe('border-cyan-600');
    expect(getBorderClassColor('border', Status.CLAIMED)).toBe('border-green-600');
    expect(getBorderClassColor('border', Status.CANCELLED)).toBe('border-red-600');
  }),
  it('get correct output of class name for text', () => {
    expect(getBorderClassColor('text', Status.ON_PROCESS)).toBe('text-blue-600');
    expect(getBorderClassColor('text', Status.FOR_SIGNING)).toBe('text-amber-600');
    expect(getBorderClassColor('text', Status.FOR_RELEASE)).toBe('text-cyan-600');
    expect(getBorderClassColor('text', Status.CLAIMED)).toBe('text-green-600');
    expect(getBorderClassColor('text', Status.CANCELLED)).toBe('text-red-600');
  })
})