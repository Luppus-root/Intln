import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = (props) => {
  const formatSalary = (salary) => {
    if (salary >= 1000000) {
      const millions = salary / 1000000;
      return (
        <>
          <FormattedNumber
            value={millions}
            style={{ decimal: "decimal" }}
            minimumFractionDigits={1}
            maximumFractionDigits={2}
          />{" "}
          {millions === 1 ? (
            <FormattedMessage id="Million" />
          ) : (
            <FormattedMessage id="Millions" />
          )}
        </>
      );
    }
    return <FormattedNumber value={salary} />;
  };

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formatSalary(props.offer.salary)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} useGrouping={true} />
      </td>
    </tr>
  );
};

export default Job;
