import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import EntryCard from "./EntryCard";

const GET_ENTRIES = gql`
  query getEntries($cursor: String) {
    entries(cursor: $cursor) {
      text
      createdAt
      uv
      dv
      group {
        urlname
      }
      user {
        name
        avatar
      }
      replies {
          text
          createdAt
          user {
              name
              avatar
          }
      }
    }
  }
`;

export default () => {
  const { loading, error, data, fetchMore } = useQuery(GET_ENTRIES, {
    variables: { cursor: null }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      { data.entries.map(entry => <EntryCard entry={entry} />) }

      <button
        className="rounded shadow w-full py-4 my-8 bg-blue-500 hover:bg-blue-700 text-white"
        onClick={ () =>
          fetchMore({
            variables: { cursor: data.entries.slice(-1)[0].createdAt },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const previousEntries = previousResult.entries;
              const newEntries = fetchMoreResult.entries;
              const newCursor = newEntries.slice(-1)[0].createdAt;
  
              return {
                cursor: newCursor,
                entries: [...previousEntries, ...newEntries],
                __typename: previousEntries.__typename
              };
            }
          })
        }
      >
        Show more entries
      </button>
    </div>
  );
};
