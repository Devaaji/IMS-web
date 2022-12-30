import randomString from 'random-string';
import { CSVLink } from 'react-csv';

const ExportFullFileCSV = ({ data, fileName, isLoading, children }) => {
  const randomName = randomString({ lenght: 20 });

  const csvLink = {
    filename: `${randomName}_${fileName}.csv`,
    data: data ? data : [],
    target: '_blank',
    separator: `;`,
    enclosingCharacter: ``,
  };

  return (
    <>
      {isLoading === false ? <CSVLink {...csvLink}>{children}</CSVLink> : null}
    </>
  );
};

export default ExportFullFileCSV;
