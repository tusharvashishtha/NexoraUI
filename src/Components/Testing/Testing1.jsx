import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const Testing1 = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // -------------------- Matter.js aliases --------------------
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies,
      Events = Matter.Events;

    // -------------------- Create engine and world --------------------
    const engine = Engine.create();
    const world = engine.world;

    // -------------------- Get parent width/height --------------------
    const parentWidth = sceneRef.current.clientWidth;
    const parentHeight = sceneRef.current.clientHeight;

    // -------------------- Renderer --------------------
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: parentWidth,
        height: parentHeight,
        wireframes: false, // show images
        background: "#f0f0f0",
        showAngleIndicator: false
      }
    });

    Render.run(render);

    // -------------------- Runner --------------------
    const runner = Runner.create();
    Runner.run(runner, engine);

    // -------------------- Images --------------------
    const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmOFwF9T0wEtBMyUAAMHD3A91OFp_ZXEAZdIUCbDXl4rzm3enUt13MwJukAvFWP0o3Hc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmOFwF9T0wEtBMyUAAMHD3A91OFp_ZXEAZdIUCbDXl4rzm3enUt13MwJukAvFWP0o3Hc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmOFwF9T0wEtBMyUAAMHD3A91OFp_ZXEAZdIUCbDXl4rzm3enUt13MwJukAvFWP0o3Hc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmOFwF9T0wEtBMyUAAMHD3A91OFp_ZXEAZdIUCbDXl4rzm3enUt13MwJukAvFWP0o3Hc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmOFwF9T0wEtBMyUAAMHD3A91OFp_ZXEAZdIUCbDXl4rzm3enUt13MwJukAvFWP0o3Hc&usqp=CAU"
    ];

    // -------------------- Create circular bodies starting from bottom --------------------
    const radius = 40; // same radius for all images
    const stack = Composite.create(); // using Composite instead of Composites.stack for circles

    const startX = 100;
    const startY = parentHeight - radius - 10;

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const body = Bodies.circle(startX + i * (radius * 2 + 10), startY, radius, {
        restitution: 0.5,
        friction: 0.1,
        render: {
          sprite: {
            texture: img,
            xScale: (radius * 2) / 100, // scale image to fit circle
            yScale: (radius * 2) / 100
          }
        }
      });
      Composite.add(stack, body);
    }

    // -------------------- Invisible walls to contain images --------------------
    const wallThickness = 100;
    const walls = [
      Bodies.rectangle(parentWidth / 2, parentHeight + wallThickness / 2, parentWidth, wallThickness, { isStatic: true }), // bottom
      Bodies.rectangle(parentWidth / 2, -wallThickness / 2, parentWidth, wallThickness, { isStatic: true }), // top
      Bodies.rectangle(-wallThickness / 2, parentHeight / 2, wallThickness, parentHeight, { isStatic: true }), // left
      Bodies.rectangle(parentWidth + wallThickness / 2, parentHeight / 2, wallThickness, parentHeight, { isStatic: true }) // right
    ];

    Composite.add(world, [stack, ...walls]);

    // -------------------- Gyroscope --------------------
    const updateGravity = (event) => {
      const orientation = typeof window.orientation !== "undefined" ? window.orientation : 0;
      const gravity = engine.gravity;

      if (orientation === 0) {
        gravity.x = Matter.Common.clamp(event.gamma, -90, 90) / 90;
        gravity.y = Matter.Common.clamp(event.beta, -90, 90) / 90;
      } else if (orientation === 180) {
        gravity.x = Matter.Common.clamp(event.gamma, -90, 90) / 90;
        gravity.y = Matter.Common.clamp(-event.beta, -90, 90) / 90;
      } else if (orientation === 90) {
        gravity.x = Matter.Common.clamp(event.beta, -90, 90) / 90;
        gravity.y = Matter.Common.clamp(-event.gamma, -90, 90) / 90;
      } else if (orientation === -90) {
        gravity.x = Matter.Common.clamp(-event.beta, -90, 90) / 90;
        gravity.y = Matter.Common.clamp(event.gamma, -90, 90) / 90;
      }
    };
    window.addEventListener("deviceorientation", updateGravity);

    // -------------------- Mouse drag --------------------
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // -------------------- Keep images falling down if thrown up --------------------
    Events.on(engine, "beforeUpdate", () => {
      Composite.allBodies(world).forEach((body) => {
        if (!body.isStatic && body.render.sprite) {
          if (body.velocity.y < -5) {
            Matter.Body.setVelocity(body, { x: body.velocity.x, y: -5 });
          }
        }
      });
    });

    // -------------------- Fit viewport --------------------
    Matter.Render.lookAt(render, { min: { x: 0, y: 0 }, max: { x: parentWidth, y: parentHeight } });

    // -------------------- Cleanup --------------------
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      window.removeEventListener("deviceorientation", updateGravity);
    };
  }, []);

  // Make the canvas take full parent size
  return <div ref={sceneRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Testing1;
