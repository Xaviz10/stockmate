import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  author?: string;
  robots?: string;
  jsonLd?: { [key: string]: any } | string;

  type?: string;
  facebookAppId?: string;
  twitterSite?: string;
}
export function SEO(props: SEOProps) {
  const {
    title,
    description,
    image,
    author,
    robots,
    jsonLd,
    type,
    facebookAppId,
    twitterSite,
  } = props;

  return (
    <Helmet>
      <meta
        name="robots"
        content={`${robots ? robots : import.meta.env.REACT_APP_SEO_ROBOTS}`}
        data-react-helmet="true"
      />
      <title>{title ? title : import.meta.env.REACT_APP_SEO_TITLE}</title>
      <meta
        name="description"
        content={`${
          description ? description : import.meta.env.REACT_APP_SEO_DESCRIPTION
        }`}
        data-react-helmet="true"
      />

      <meta
        name="author"
        content={`${author ? author : import.meta.env.REACT_APP_SEO_AUTHOR}`}
        data-react-helmet="true"
      />

      {/********** Open graph Meta Tags ***********/}
      <meta
        property="og:site_name"
        content="Storytraining"
        data-react-helmet="true"
      />
      {/* Opengraph meta tags for Facebook & LinkedIn */}
      {/* <meta property="og:url" content={`${url}`} data-react-helmet="true" /> */}
      <meta
        property="og:type"
        content={type ? type : import.meta.env.REACT_APP_SEO_TYPE}
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        content={`${title ? title : import.meta.env.REACT_APP_SEO_TITLE}`}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={`${
          description ? description : import.meta.env.REACT_APP_SEO_DESCRIPTION
        }`}
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content={`${image ? image : import.meta.env.REACT_APP_SEO_IMAGE}`}
        data-react-helmet="true"
      />
      {/*You can get this id when you create an app id on Facebook of your Facebook page*/}
      {!!facebookAppId && (
        <meta
          property="fb:app_id"
          content={facebookAppId}
          data-react-helmet="true"
        />
      )}
      {/*These tags work for Twitter & Slack*/}
      <meta
        name="twitter:card"
        content="summary_large_image"
        data-react-helmet="true"
      />
      <meta
        name="twitter:title"
        content={`${title ? title : import.meta.env.REACT_APP_SEO_TITLE}`}
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content={`${
          description ? description : import.meta.env.REACT_APP_SEO_DESCRIPTION
        }`}
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content={`${image ? image : import.meta.env.REACT_APP_SEO_IMAGE}`}
        data-react-helmet="true"
      />
      <meta
        name="twitter:creator"
        content={
          twitterSite
            ? twitterSite
            : import.meta.env.REACT_APP_SEO_TWITTER_CREATOR
        }
        data-react-helmet="true"
      />

      <meta
        name="twitter:site"
        content={
          twitterSite ? twitterSite : import.meta.env.REACT_APP_SEO_TWITTER_SITE
        }
        data-react-helmet="true"
      />

      {/* Structured data */}
      <script type="application/ld+json">
        {jsonLd ? `${jsonLd}` : import.meta.env.REACT_APP_SEO_STRUCTURED_DATA}
      </script>
    </Helmet>
  );
}
