import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import ContentCard from "./ContentCard";

const GET_CONTENTS = gql`
  query getContents($cursor: String) {
    contents(cursor: $cursor) {
      createdAt
      title
      description
      thumbnail
      group {
        urlname
      }
      user {
        name
        avatar
      }
    }
  }
`;

export default () => {
  const { loading, error, data, fetchMore } = useQuery(GET_CONTENTS, {
    variables: { cursor: null }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      { data.contents.map(content => <ContentCard content={content} />) }

      <button
        className="rounded shadow w-full py-4 my-8 bg-blue-500 hover:bg-blue-700 text-white"
        onClick={ () =>
          fetchMore({
            variables: { cursor: data.contents.slice(-1)[0].createdAt },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const previousContents = previousResult.contents;
              const newContents = fetchMoreResult.contents;
              const newCursor = newContents.slice(-1)[0].createdAt;
  
              return {
                cursor: newCursor,
                contents: [...previousContents, ...newContents],
                __typename: previousContents.__typename
              };
            }
          })
        }
      >
        Show more contents
      </button>
    </div>
  );
};
