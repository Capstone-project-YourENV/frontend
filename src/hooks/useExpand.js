import { useState } from 'react';

export default function useExpand(expand) {
  const [expanded, setExpanded] = useState(expand);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return [expanded, handleExpandClick];
}
