/**
 * Returns an ellipsized text that fits in between a calculated distance
 * (not overlapping on other nodes)
 *
 * @param text Text to be ellipsized
 * @param nodePos Current node position in the 2D co-ordinate
 * @param parentNodePos Parent node position in the 2D co-ordinate
 * @param fontSize Text Size used in the UI element
 * @returns Calculated ellipsized text
 */
export const getEllipsizedText = (
  text: string,
  nodePos: number,
  parentNodePos: number,
  fontSize: number
) => {
  // Observed W/H ratio of `W` and `f` and took floor of mean of the ratio (i.e 3)
  const charHWRatio = 3;
  const minCharSize = 3;

  const distance = Math.abs(nodePos - (parentNodePos || 0));
  const charSize = fontSize / charHWRatio || minCharSize;

  let maxCharWidth = Math.floor(distance / charSize);
  if (maxCharWidth === 0) {
    return text;
  }

  // Compensating for 3 dots and 1 space in ellipsized text
  maxCharWidth -= 4;

  return (
    text.substring(0, maxCharWidth) + (text.length > maxCharWidth ? ' ...' : '')
  );
};
