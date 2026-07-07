//node 主进程负责Agent执行 js单线程
//调用工具去执行命令行任务（分离出去，独立的子进程）
//node是多进程架构
//子进程
//子进程做完后，IPC（进程间通信 Inner Process Communication）返回结果给主进程
import {
  spawn //启动一个子进程
} from 'node:child_process'