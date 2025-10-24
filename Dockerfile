# 使用 Node.js 作为基础镜像
# 正确的阿里云 Node.js 镜像路径
FROM docker.mirrors.ustc.edu.cn/library/node:16-alpine
# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 暴露端口
EXPOSE 8080

# 启动应用
CMD ["npm", "run", "serve"]