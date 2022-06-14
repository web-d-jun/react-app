import React from "react";

import { useQuery, gql } from "@apollo/client";
const GET_LAUNCH = gql`
  query Launch {
    launches {
      cursor
      hasMore
      launches {
        id
        site
        mission {
          name
          missionPatch
        }
        rocket {
          id
          name
          type
        }
        isBooked
      }
    }
  }
`;

interface DataTypes {
  id: String;
  site: String;
}

const Launch: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LAUNCH);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const items = data.launches.launches.map(({ id, site }: DataTypes) => (
    <div>
      {id} : {site}
    </div>
  ));

  return items;
};

const DataPage = () => {
  return (
    <div>
      <Launch />
    </div>
  );
};
export default DataPage;
