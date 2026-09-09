import React, { useEffect } from 'react';

/**
 * JsonLd component for injecting schema.org structured data
 * Renders both inline script tag and dynamically attaches to document head for maximum SEO crawler compatibility.
 */
export const JsonLd = ({ schema, id }) => {
  const jsonString = JSON.stringify(schema);
  const scriptId = id || `schema-ld-${Math.abs(hashString(jsonString))}`;

  useEffect(() => {
    // Inject or update in document head for scrapers that look inside <head>
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = jsonString;

    return () => {
      const tag = document.getElementById(scriptId);
      if (tag && tag.parentNode) {
        tag.parentNode.removeChild(tag);
      }
    };
  }, [jsonString, scriptId]);

  return (
    <script
      id={`inline-${scriptId}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
};

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

export default JsonLd;
