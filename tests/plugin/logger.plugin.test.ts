import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/plugin/logger.plugin";

describe("plugin/logger.plugin.ts", () => {
  test("buildLogger should return function logger", () => {
    const logger = buildLogger("test");
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });

  test("logger.error should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "error");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);

    logger.error(message);

    console.log(logger.error(message));

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        message,
        service,
      })
    );
  });
});
