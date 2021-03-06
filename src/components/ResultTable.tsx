import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Trip } from "../objects/Trip";
import { FlightPanel } from "./FlightPanel";

export function ResultTable(props: any) {
  if (props.trips) {
    return (
      <div>
        {props.trips.map((trip: Trip, index: number) => {
          return (
            <Container
              className="mb-3 border-bottom border-5"
              key={index}
            >
              <Row>
                <Col>
                  <div className="mb-2">
                    <b>DEPARTURE</b> Duration: {trip.outwardFlight?.duration}
                  </div>
                  <FlightPanel flight={trip.outwardFlight} />
                </Col>
                {trip.returnFlight ? (
                  <Col>
                    <div className="mb-2">
                      <b>RETURN</b> Duration: {trip.returnFlight.duration}
                    </div>
                    <FlightPanel flight={trip.returnFlight} />
                  </Col>
                ) : (
                  ""
                )}
                <Col sm={1}>
                  <Row>
                    <h2>{trip.price}&nbsp;€</h2>
                  </Row>
                  <Row className="mt-3">
                    <a
                      href={trip.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="success">Book</Button>
                    </a>
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    );
  }
  return <div></div>;
}
