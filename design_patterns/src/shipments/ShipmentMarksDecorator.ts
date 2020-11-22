export const applyMarks = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalValue = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const marksToApply = this.state.marks.reduce((acc: [], mark: string) => {
      if (mark === 'Fragile') {
        return [
          ...acc,
          '**MARK FRAGILE**'
        ]
      }

      if (mark === 'Do Not Leave') {
        return [
          ...acc,
          '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**'
        ]
      }

      if (mark === 'Return Receipt Requested') {
        return [
          ...acc,
          '**MARK RETURN RECEIPT REQUESTED**'
        ]
      }

      return acc;
    }, [])
    return `${originalValue.apply(this, args)} \n${marksToApply.join('\n')}`;
  }
}