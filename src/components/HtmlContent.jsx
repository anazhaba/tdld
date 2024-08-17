import React from 'react';

const HtmlContent = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default HtmlContent;