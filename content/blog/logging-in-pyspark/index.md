---
title: Logging in PySpark
date: 2016-07-04T18:54:42+08:00
author: shantanualshi
tags: pyspark, howto, til
---

Logging while writing pyspark applications is a common issue. I've come across many questions on Stack overflow where beginner Spark programmers are worried that they have tried logging using some means and it didn't work.

This short post will help you configure your pyspark applications with log4j. Know that this is only one of the many methods available to achieve our purpose. If you have a better way, you are more than welcome to share it via comments.

For the sake of brevity, I will save the technical details and working of this method for another post.

### Step 1:  Configure log4j properties

We will use something called as Appender. As per [log4j documentation](https://logging.apache.org/log4j/2.x/manual/appenders.html), appenders are responsible for delivering LogEvents to their destination.

Append the following lines to your log4j configuration properties. You'll find the file inside your spark installation directory-

Inside- _spark/conf/log4j.properties_

```
# Define the root logger with Appender file
log4j.rootLogger=WARN, console, FILE

# Define the file appender
log4j.appender.FILE=org.apache.log4j.DailyRollingFileAppender

# Name of the log file
log4j.appender.FILE.File=/tmp/logfile.out

# Set immediate flush to true
log4j.appender.FILE.ImmediateFlush=true

# Set the threshold to DEBUG mode
log4j.appender.FILE.Threshold=debug

# Set File append to true.
log4j.appender.FILE.Append=true

# Set the Default Date pattern
log4j.appender.FILE.DatePattern='.' yyyy-MM-dd

# Default layout for the appender
log4j.appender.FILE.layout=org.apache.log4j.PatternLayout
log4j.appender.FILE.layout.conversionPattern=%m%n

```

You can refer to the log4j documentation to customise each of the property as per your convenience. However, this config should be just enough to get you started with basic logging.

### Step 2: Use it in your Spark application

Inside your pyspark script, you need to initialize the logger to use log4j. The easy thing is, you already have it in your pyspark context!

```python
sc = SparkContext(conf=conf)
log4jLogger = sc._jvm.org.apache.log4j
log = log4jLogger.LogManager.getLogger(__name__)
log.warn("Hello World!")
```

Just save and quit! That's it! Your spark script is ready to log to console and log file.

I personally set the logger level to WARN and log messages inside my script as log.warn. Its not a good practice however if you set the log level to INFO, you'll be inundated with log messages from Spark itself.

Again, comments with better alternatives are welcome!

Cheers!
